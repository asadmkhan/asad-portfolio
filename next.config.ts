import createNextIntlPlugin from "next-intl/plugin";
import withMDX from "@next/mdx";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
const nextConfig = withMDX({
  extension: /\.mdx?$/,
})({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
});

export default withNextIntl(nextConfig);
