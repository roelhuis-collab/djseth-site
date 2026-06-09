exports.handler = async (event, context) => {
  const identity = context.clientContext && context.clientContext.identity;
  if (!identity || !identity.token) {
    return { statusCode: 500, body: JSON.stringify({ error: "No server-side identity context" }) };
  }
  const userId = (event.queryStringParameters || {}).user_id;
  if (!userId) {
    return { statusCode: 400, body: JSON.stringify({ error: "user_id query param required" }) };
  }
  const res = await fetch(`${identity.url}/admin/users/${userId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${identity.token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      confirm: true,
      app_metadata: { roles: ["admin"] }
    })
  });
  const text = await res.text();
  return { statusCode: res.status, body: text };
};
