import Logo from "@/app/components/ui/Logo";
import { ImageResponse } from "next/og";

async function loadGoogleFont(font, text) {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const resource = css.match(
      /src: url\((.+)\) format\('(opentype|truetype)'\)/
    );

    if (resource) {
      const response = await fetch(resource[1]);
      if (response.status === 200) {
        return await response.arrayBuffer();
      }
    }

    throw new Error(`Failed to load font: ${font}`);
  } catch (error) {
    throw new Error("Error loading Google Font.");
  }
}

export async function GET(req) {
  const url = new URL(req.url);
  const text = url.searchParams.get("title") || "Ecommystery";
  const des = url.searchParams.get("des") || "";
  const pathName = url.searchParams.get("path") || "";

  try {
    const plusJakartaSans = await loadGoogleFont("Plus+Jakarta+Sans", text);
    const playfairDisplay = await loadGoogleFont("Playfair+Display", text);

    return new ImageResponse(
      (
        <div
          style={{
            height: "630px",
            width: "1200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "black",
            overflow: "hidden",
            position: "relative",
            fontFamily: "sans-serif",
          }}
        >
          <svg
            width={1600}
            height={1401}
            style={{
              transform: `rotate(90deg)`,
            }}
            viewBox="0 0 2066 1809"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_2447_27)">
              <path
                d="M1045.18 1368.19C738.719 1377.52 444.792 868.963 440.55 687.472C436.308 505.98 565.738 357.183 1163.31 492.509C1562.27 582.857 1620.95 583.038 1625.19 764.53C1630.95 1011.17 1351.64 1358.85 1045.18 1368.19Z"
                fill="url(#paint0_linear_2447_27)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2447_27"
                x="0.450439"
                y="0.0838623"
                width="2064.83"
                height="1808.23"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation={220}
                  result="effect1_foregroundBlur_2447_27"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2447_27"
                x1="1261.85"
                y1="666.048"
                x2="1107.74"
                y2="1049.74"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#226FFF" />
                <stop offset="0.498509" stopColor="#DE22FF" />
                <stop offset={1} stopColor="#FFE11B" />
              </linearGradient>
            </defs>
          </svg>
          <div
            style={{
              position: "absolute",
              zIndex: 99999999,
              color: "white",
              display: "flex",
              fontSize: 20,
              fontFamily: "Plus Jakarta Sans",
              top: 150,
            }}
          >
            <Logo />
          </div>
          <div
            style={{
              position: "absolute",
              zIndex: 99999999,
              color: "white",
              width: 900,
              fontSize: 60,
              fontFamily: "Plus Jakarta Sans",
              top: 230,
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {text}
          </div>
          <div
            style={{
              position: "absolute",
              zIndex: 99999999,
              width: 900,
              textAlign: "center",
              color: "white",
              fontSize: 18,
              fontFamily: "Plus Jakarta Sans",
              top: 360,
            }}
          >
            {`${des.slice(0, 220)}`}
          </div>
          <div
            style={{
              position: "absolute",
              zIndex: 99999999,
              textAlign: "center",
              color: "white",
              fontSize: 18,
              fontFamily: "Plus Jakarta Sans",
              bottom: 40,
              display: "flex",
            }}
          >
            {`${process.env.NEXT_PUBLIC_SITE_URL}${pathName}`}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Plus Jakarta Sans",
            data: plusJakartaSans,
            style: "normal",
          },
          {
            name: "Playfair Display",
            data: playfairDisplay,
            style: "normal",
          },
        ],
      }
    );
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
