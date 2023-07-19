<script>
	import { onMount } from 'svelte';

	import { PUBLIC_GMAPS_API_KEY } from '$env/static/public';

	onMount(async () => {
		import('@googlemaps/js-api-loader').then((val) => {
			new val.Loader({
				apiKey: PUBLIC_GMAPS_API_KEY
			})
				.load()
				.then(() => {
					const mapEl = document.getElementById('map');

					const mapOptions = {
						center: {
							lat: 37.8097343,
							lng: -98.5556199
						},
						disableDefaultUI: true,
						zoom: 5,
						mapId: 'b5d31816b33cdd9b'
					};

					if (null !== mapEl) {
						const map = new google.maps.Map(mapEl, mapOptions);

						if (navigator.geolocation) {
							navigator.geolocation.getCurrentPosition(
								(position) => {
									const pos = {
										lat: position.coords.latitude,
										lng: position.coords.longitude
									};

									map.setCenter(pos);
									map.setZoom(10);
								},
								() => {
									// handleLocationError(true, infoWindow, map.getCenter()!);
								}
							);
						} else {
							// Browser doesn't support Geolocation
							// handleLocationError(false, infoWindow, map.getCenter()!);
						}
					}
				});
		});
	});
</script>

<svelte:head>
	<title>Chicken Nanny</title>
</svelte:head>

<div id="map" />

<style>
	#map {
		width: 100%;
		height: 100vh;
	}
</style>
