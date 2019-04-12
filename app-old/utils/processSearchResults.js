/**
 * Parse search results. Extract the relevant article data from the returned
 * search hits.
 *
 * @param   {object}  results - Search results that need to be parsed
 *
 * @returns {array}           - Array of articles
 */
export default results =>
  results.hits.hits.map(article => {
    const source = article._source; // eslint-disable-line no-underscore-dangle
    return {
      _id: article._id, // eslint-disable-line no-underscore-dangle
      title: source.title,
      uri: source.uri,
      github: source.github,
      image: source.image,
      description: source.description,
      tags: source.tags,
      updated: source.updated,
    };
  });
