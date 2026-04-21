function MapEmbed() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <iframe
        src="https://www.google.com/maps?q=Amy%20Daniher%2C%20MD%2C%20San%20Mateo%2C%20CA&z=12&output=embed"
        className="absolute inset-0 h-full w-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Amy Daniher, M.D. - Google Maps location"
      />
    </div>
  );
}

export default MapEmbed;
