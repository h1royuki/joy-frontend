export default {
  state: {
    posts: [],
    firstPostPage: null,
    lastPostPage: null
  },
  mutations: {
    addPostPage(state, page) {
      state.posts.push(...page._posts);
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
