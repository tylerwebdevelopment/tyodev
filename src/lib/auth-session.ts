import {auth} from '@/lib/auth';
import {headers as nextHeaders} from 'next/headers';

export const getCurrentAdminSession = async () => {
  let session = null;

  try{
    if(typeof window === 'undefined'){
      const rawHeaders = await nextHeaders();
      const serverHeader = new Headers();
      
      for(const [key, value] of rawHeaders.entries()){
        serverHeader.set(key, value);
      }

      session = await auth.api.getSession({
        headers: serverHeader
      })
    }else{
      const res = await fetch('/api/auth/get-session', {
        cache: 'no-store',
        credentials: 'include'
      });
      const data = await res.json();
      session = data.session;
    }

    if(!session?.user || session.user.isAdmin !== true){
      return null;
    }
    return session;
  }catch(err){
    console.log("Failed to get Session", err);
    return null;
  }
}