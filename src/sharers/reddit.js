exports.render = function render(text, rawText, refUrl) {
    const shareText = this.getText(text);
    const url = this.getShareUrl(shareText, refUrl);

    return `<a href="${url}" target="_blank" rel="noopener nofollow noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <path d="M616.1 657.6c3-3 6.7-4.5 11.2-4.5s8.2 1.5 11.2 4.5 4.5 6.8 4.5 11.5-1.5
                8.5-4.5 11.5c-27.6 27.2-71.9 40.8-132.7 40.8h-1.3c-60.8 0-104.8-13.6-132.1-40.8
                -3.4-3-5.1-6.8-5.1-11.5s1.7-8.5 5.1-11.5c3-3 6.7-4.5 11.2-4.5 4.5 0 8.2 1.5 11.2
                4.5 20.8 21.7 57.4 32.5 109.7 32.5h1.3c51.8 0 88.6-10.8 110.3-32.5zm-178-140.4
                c0 15.7-5.5 29.3-16.6 40.8-11.1 11.5-24.5 17.2-40.2 17.2-15.7 0-29.1-5.7-40.2
                -17.2-11.1-11.5-16.6-25.1-16.6-40.8s5.5-29.1 16.6-40.2c11.1-11.1 24.5-16.6 40.2
                -16.6 15.7 0 29.1 5.5 40.2 16.6 11.1 11.1 16.6 24.5 16.6 40.2zM784.6 239c-12.3 0
                -23-4.5-31.9-13.4-8.9-8.9-13.4-19.6-13.4-31.9 0-12.8 4.5-23.6 13.4-32.5 8.9-8.9
                19.6-13.4 31.9-13.4 12.8 0 23.6 4.5 32.5 13.4 8.9 8.9 13.4 19.8 13.4 32.5 0 12.3
                -4.5 23-13.4 31.9-8.9 9-19.8 13.4-32.5 13.4zm68.2 289.1c14.9-6 27-15.6 36.4-29
                9.4-13.4 14-28.4 14-45 0-21.7-7.7-40.3-23-55.8S846.4 375 824.7 375c-25.5 0-46.4
                10.2-62.5 30.6-64.2-45.5-144-70-239.3-73.4l53-169.1 131.4 31.3c.4 21.3 8.2 39.3
                23.3 54.2 15.1 14.9 33.1 22.3 53.9 22.3 21.3 0 39.6-7.5 54.9-22.6 15.3-15.1 23
                -33.3 23-54.6 0-21.3-7.7-39.6-23-54.9-15.3-15.3-33.6-23-54.9-23-15.3 0-29.4 4.4
                -42.1 13.1-12.8 8.7-22.3 20.1-28.7 34.1l-144.8-34.5c-3.8-.9-7.5-.3-11.2 1.6-3.6
                1.9-6.1 5-7.3 9.3l-60.6 192.7c-95.3 1.7-176.3 25.7-243.1 72.1-15.3-18.3-35.1
                -27.4-59.3-27.4-21.7 0-40.2 7.8-55.5 23.3-15.3 15.5-23 34.1-23 55.8 0 15.7 4.1
                30.1 12.4 43.1s19.5 22.6 33.5 29c-3 10.6-4.5 22.1-4.5 34.5 0 41.7 15.7 80.3 47.2
                115.8 31.5 35.5 74.3 63.6 128.6 84.2 54.2 20.6 113.5 30.9 177.7 30.9 63.8 0
                122.8-10.3 177.1-30.9 54.2-20.6 97.1-48.7 128.6-84.2s47.2-74.1 47.2-115.8c0-11.5
                -1.3-22.9-3.9-34.4zm-223.3-67.7c15.7 0 29.1 5.5 40.2 16.6 11.1 11.1 16.6 24.5
                16.6 40.2s-5.5 29.3-16.6 40.8c-11.1 11.5-24.5 17.2-40.2 17.2-15.7 0-29.1-5.7
                -40.2-17.2-11.1-11.5-16.6-25.1-16.6-40.8s5.5-29.1 16.6-40.2c11.1-11 24.5-16.6 40.2-16.6z" fill="currentcolor"/>
        </svg></a>`;
};

exports.getText = function getText(text) {
    let chunk = text.trim();
    if (chunk.length > 120)
        chunk = chunk.slice(0, 120).trim() + "\u2026";

    return `\u201c${chunk}\u201d`;
};

exports.getShareUrl = function getShareUrl(text, refUrl) {
    return `https://reddit.com/submit?title=${encodeURIComponent(text)}&url=${encodeURIComponent(refUrl)}`;
};

exports.name = "reddit";
