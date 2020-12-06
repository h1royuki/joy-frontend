export default {
  state: {
    posts: [],
    firstPostPage: null,
    lastPostPage: null
  },
  mutations: {
    addPostPage(state, page) {
      const uniquePosts = [];

      page._posts.map(postFromBack => {
        const duplicatedPost = state.posts.filter(
          post => post._id === postFromBack._id
        );

        if (duplicatedPost.length === 0) {
          uniquePosts.push(postFromBack);
        }
      });

      state.posts.push(...uniquePosts);
    },

    setLastPostPage(state, pageNumber) {
      state.lastPostPage = pageNumber;
    },
    setFirstPostPage(state, pageNumber) {
      state.firstPostPage = pageNumber;
    }
  },
  actions: {
    addPostPage({ commit }, page) {
      commit("addPostPage", page);
    },
    setLastPostPage({ commit }, pageNumber) {
      commit("setLastPostPage", pageNumber);
    },
    setFirstPostPage({ commit }, pageNumber) {
      commit("setFirstPostPage", pageNumber);
    }
  },

  getters: {
    postPages: state => state.posts,
    firstPostPage: state => state.firstPostPage,
    lastPostPage: state => state.lastPostPage
  }
};
