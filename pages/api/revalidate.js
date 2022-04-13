export default async function handler(req, res) {
  const route = req.headers['x-contentful-webhook-name']
  if (req.headers['x-secret'] === process.env.REVALIDATE_SECRET) {
    await res.unstable_revalidate(route)
    res.status(200).json({ revalidate: true })
  } else {
    return res.status(401).end()
  }
}
