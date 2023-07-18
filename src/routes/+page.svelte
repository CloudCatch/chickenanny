<svelte:head>
    <title>Chicken Nanny</title>
    <script>
        (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
          key: "AIzaSyAO5_X5yWdTiHWvXXMVJlcpk7trCcTqRFY",
          v: "weekly",
          // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
          // Add other bootstrap parameters as needed, using camel case.
        });
      </script>
</svelte:head>

<script>
    import { signIn, signOut } from "@auth/sveltekit/client"
    import { page } from "$app/stores"
    import { Loader } from '@googlemaps/js-api-loader';

    const loader = new Loader({
    apiKey: "AIzaSyAO5_X5yWdTiHWvXXMVJlcpk7trCcTqRFY",
    });

    const mapOptions = {
    center: {
        lat: 37.8097343,
        lng: -98.5556199,
    },
    disableDefaultUI: true,
    zoom: 5
    };

    // Promise
loader
  .load()
  .then((google) => {
    new google.maps.Map(document.getElementById("map"), mapOptions);
    console.log( google );
  })
  .catch(e => {
    // do something
  });
</script>

<div id="map"></div>

<p>
    {#if $page.data.session}
      {#if $page.data.session.user?.image}
        <span
          style="background-image: url('{$page.data.session.user.image}')"
          class="avatar"
        />
      {/if}
      <span class="signedInText">
        <small>Signed in as</small><br />
        <strong>{$page.data.session.user?.name ?? "User"}</strong>
      </span>
      <button on:click={() => signOut()} class="button">Sign out</button>
    {:else}
      <span class="notSignedInText">You are not signed in</span>
      <button on:click={() => signIn("facebook")}>Sign In with Facebook</button>
    {/if}
  </p>

<style>
    #map {
        width: 100vw;
        height: 100vh;
    }
</style>