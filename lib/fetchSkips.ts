async function fetchSkips() {
    const skips = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL as string)
    return skips.json();
}

export default fetchSkips;