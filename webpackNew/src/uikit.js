function importJsCss(resolve) {
   resolve.keys().forEach(resolve);
}

importJsCss(require.context('../src/', true, /\.js$|\.scss$/));