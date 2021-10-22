import React from 'react';
import { Icon, Segment } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

function Marker() {
    return (<Icon name='marker' size='big' color='red' />)
}


export default function EventDetailedMap({{latLng}}) {
    const zoom = 14;
    return (
        <Segment attached='bottom' style={{padding: 0}}>
            <div style={{height: 300, width: '100%'}}></div>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBovACdRZ767KeIq1xwgdNTP5B3J1ua0JU' }}
            center={latLng}
            zoom={zoom}
            >
                <Marker lat={latLng.lat} lng={latLng.lng} />
            </GoogleMapReact>

        </Segment>
    )
}