'use client';
import { QRCodeSVG } from 'qrcode.react';

export default function WifiQR({ ssid = 'ManitoBungalow', password = 'Welcome2Manito!', encryption = 'WPA' }) {
  const wifiString = `WIFI:T:${encryption};S:${ssid};P:${password};;`;

  return (
    <div className="wifi-qr">
      <div className="wifi-qr-code">
        <QRCodeSVG
          value={wifiString}
          size={180}
          bgColor="#FAF6EF"
          fgColor="#17140F"
          level="M"
        />
      </div>
      <div className="wifi-qr-details">
        <p className="wifi-qr-instruction">Scan with your phone camera to connect instantly</p>
        <div className="wifi-qr-manual">
          <div className="wifi-field">
            <span className="wifi-field-label">Network</span>
            <span className="wifi-field-value">{ssid}</span>
          </div>
          <div className="wifi-field">
            <span className="wifi-field-label">Password</span>
            <span className="wifi-field-value">{password}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
