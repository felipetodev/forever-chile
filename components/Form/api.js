export default {
  sendForm: async (payload) => {
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_FORM_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      })
      return await res.json()
    } catch (e) {
      console.error(e)
    }
  }
}
