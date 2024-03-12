import dynamic from "next/dynamic";

import "ckeditor5/dist/index.browser.css";
import Head from "next/head";

const Editor = dynamic(() => import("../components/Editor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <script type="importmap">
          {JSON.stringify({
            imports: {
              ckeditor5:
                "https://cdn.jsdelivr.net/npm/ckeditor5@alpha/dist/index.browser.js",
              "ckeditor5/": "https://cdn.jsdelivr.net/npm/ckeditor5@alpha/",
            },
          })}
        </script>
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/ckeditor5@alpha/dist/index.browser.js"
          crossOrigin="anonymous"
        />
      </Head>
      <main className="flex flex-col items-center justify-between ">
        <Editor />
      </main>
    </>
  );
}
