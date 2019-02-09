const elasticsearch = require('elasticsearch');
const config = require('../../config/config');

// Core ES variables for this project
const index = 'articles';
const type = 'website';
const client = new elasticsearch.Client({ host: config.es });

/** Check the ES connection status */
async function checkConnection() {
  let isConnected = false;
  while (!isConnected) {
    console.log('Connecting to ES'); // eslint-disable-line no-console
    try {
      const health = await client.cluster.health({}); // eslint-disable-line no-await-in-loop
      console.log(health); // eslint-disable-line no-console
      isConnected = true;
    } catch (err) {
      console.log('Connection Failed, Retrying...', err); // eslint-disable-line no-console
    }
  }
}

/** Clear the index, recreate it, and add mappings */
async function resetIndex() {
  const settings = {
    settings: {
      index: {
        analysis: {
          analyzer: {
            edge_ngram_analyzer: {
              tokenizer: 'edge_ngram_tokenizer',
              filter: 'lowercase',
            },
          },
          tokenizer: {
            edge_ngram_tokenizer: {
              type: 'edge_ngram',
              min_gram: 3,
              max_gram: 9,
              token_chars: ['letter', 'digit'],
            },
          },
        },
      },
    },
  };

  if (await client.indices.exists({ index })) {
    await client.indices.delete({ index });
  }
  await client.indices.create({ index, body: settings });
  await putArticleMapping();
}

/** Add book section schema mapping to ES */
async function putArticleMapping() {
  const schema = {
    mid: { type: 'keyword' },
    title: { type: 'keyword' },
    uri: { type: 'keyword' },
    github: { type: 'keyword' },
    image: { type: 'keyword' },
    description: { type: 'text' },
    tags: { type: 'text', analyzer: 'edge_ngram_analyzer' },
    updated: { type: 'date' },
  };

  return client.indices.putMapping({
    index,
    type,
    body: { properties: schema },
  });
}

module.exports = {
  client,
  index,
  type,
  checkConnection,
  resetIndex,
};
