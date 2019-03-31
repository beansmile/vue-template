module.exports = {
  plugins: {
    autoprefixer: {},
    <%_ if (options.mobile) { _%>
    'postcss-px-to-relative-unit': {},
    <%_ } _%>
  }
}
