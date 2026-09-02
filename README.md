# determine · 个人学术主页

这是一个基于 Jekyll 和 GitHub Pages 的个人学术主页。

## 部署步骤

1. 在 GitHub 新建仓库，仓库名必须是：

   ```text
   determine123.github.io
   ```

2. 将本目录中的文件上传到仓库根目录，至少包括：

   ```text
   _config.yml
   Gemfile
   index.html
   styles.css
   script.js
   .github/workflows/pages.yml
   ```

3. 进入 GitHub 仓库：**Settings → Pages**。
4. 在 **Build and deployment** 中选择 **GitHub Actions**。
5. 推送到 `main` 分支后，Actions 会自动构建并部署。
6. 访问：

   ```text
   https://determine123.github.io
   ```

## 注意

- 不要添加 `.nojekyll`，否则 GitHub Pages 不会执行 Jekyll 构建。
- 当前主页使用 `index.html` + 自定义 CSS，完全兼容 Jekyll。
- 之后可以把文章放入 `_posts/`，把图片放入 `assets/images/`。
- 如果 GitHub 用户名不是 `determine123`，请同步修改 `_config.yml` 中的 `url` 和 `repository`，并使用对应的 `用户名.github.io` 仓库名。
