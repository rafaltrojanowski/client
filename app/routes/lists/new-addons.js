import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').query('addon', { page: { limit: 100 }, sort: '-publishedDate', include: 'categories' });
  }
});
