import { Inter } from "next/font/google";
import "./../../css/output.css";
import config from "../../md-web.config.json"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: config.website_title,
  description: config.website_description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <script defer src="https://hammerjs.github.io/dist/hammer.min.js" />
      </body>
    </html>
  );
}
