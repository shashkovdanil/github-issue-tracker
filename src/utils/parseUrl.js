import qs from 'querystringify';

export const parseUrl = url => {
  if (url) {
    const parsedUrl = qs.parse(url);
    return {
      q: parsedUrl.q.split(' ').map(i => i.split(':')[1]).join().replace(',', '/'), // ?q=user:user+repo:repo => user/repo
      page: parsedUrl.page,
      perPage: parsedUrl.per_page
    };
  }
};
