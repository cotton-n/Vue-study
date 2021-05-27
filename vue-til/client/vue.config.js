module.exports = {
	devServer: {
		// 화면에 eslint 에러가 표시되지 않도록하는 속성
		overlay: false,
		// npm run serve 했을 때 브라우저를 자동으로 띄워주는 속성
		open: true,
	},
	// 웹 페이지명 변경
	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].title = 'vue-til';
			return args;
		});
	},
};
