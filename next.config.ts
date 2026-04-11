/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // これを追加（静的ファイルとして書き出す）
  images: {
    unoptimized: true, // GitHub Pagesでは画像最適化が使えないため
  },
};

export default nextConfig;
