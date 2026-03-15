
export const CheckAccountIsAdmin = async (email:string) => {
 const res = await fetch('/api/helpers/check-admin', {
    method: 'POST',
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({email}),
  });
  if(!res.ok) return new Error('Failed To Check Admin Status');
  return res.json();
}