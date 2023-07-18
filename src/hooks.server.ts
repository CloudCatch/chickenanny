import { SvelteKitAuth } from "@auth/sveltekit";
import Facebook from "@auth/core/providers/facebook"
import { AUTH_SECRET, FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET } from "$env/static/private";
import type { Handle } from "@sveltejs/kit";

export const handle = SvelteKitAuth(async (event) => {
  const authOptions = {
    providers: [Facebook({ clientId: FACEBOOK_CLIENT_ID, clientSecret: FACEBOOK_CLIENT_SECRET })],
    secret: AUTH_SECRET,
    trustHost: true,
  }
  return authOptions
}) satisfies Handle;