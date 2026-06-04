import { ImageResponse } from "next/og";

// Apple touch icon / web-clip — the brand "Q" letterform (white) on a dark background.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const Q_PATH =
  "M345.383 76.3036C345.383 46.6886 365.263 26.9453 395.29 26.9453C425.179 26.9453 445.196 46.6886 445.196 76.3036C445.196 105.919 425.179 125.662 395.29 125.662C365.263 125.662 345.383 105.919 345.383 76.3036ZM358.408 76.3036C358.408 99.0633 373.215 114.008 395.29 114.008C417.364 114.008 432.171 99.0633 432.171 76.3036C432.171 53.4069 417.364 38.5994 395.29 38.5994C373.215 38.5994 358.408 53.4069 358.408 76.3036ZM420.517 132.654C420.517 127.719 424.082 124.565 429.429 124.565C434.639 124.565 438.204 127.719 438.204 132.654C438.204 137.453 434.639 140.744 429.429 140.744C424.082 140.744 420.517 137.453 420.517 132.654Z";

export default function AppleIcon() {
  const q = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="345 26 101 116"><path fill="#ffffff" d="${Q_PATH}"/></svg>`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#181818",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          width={91}
          height={104}
          src={`data:image/svg+xml,${encodeURIComponent(q)}`}
          alt="Q"
        />
      </div>
    ),
    { ...size }
  );
}
