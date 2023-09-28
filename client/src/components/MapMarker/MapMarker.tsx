import React, { useState } from 'react'
import { Marker, InfoWindow } from '@react-google-maps/api'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import useGetWeather from '../../hooks/useGetWeather'
import InfoBox from '../InfoBox'

const MapMarker = ({ position, setSelectedCityPosition }: { position: google.maps.LatLngLiteral, setSelectedCityPosition: Function }) => {
    const [getWeather] = useGetWeather()

    const [showInfoWindow, setShowInfoWindow] = useState(false)
    const [info, setInfo] = useState({} as any)
    const handleClick = async () => {
        setSelectedCityPosition(position.lat, position.lng)
        try {
            const result = await getWeather(position.lat, position.lng)
            setInfo(result)
        } catch (err) {
            setInfo(err)
        } finally {
            setShowInfoWindow(true);
        }
    }

    const handleClose = () => {
        setShowInfoWindow(false)
    }
    return (
        <ClickAwayListener onClickAway={handleClose}>
            <Marker position={position} onClick={handleClick}>
                {showInfoWindow &&
                    <InfoWindow position={position} onCloseClick={handleClose}>
                        <InfoBox info={info} />
                    </InfoWindow>}
            </Marker>
        </ClickAwayListener>
    )
}

export default MapMarker
