"use client";

const Services = ({ services }) => {
  return services.map((service, index) => {
    return (
      <section
        key={index}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 20px", // Adjust padding for responsiveness
        }}
      >
        <div className="container">
          {/* Title centered */}
          <div className="text-center" style={{ padding: "20px" }}>
            <h2 className="font-bold leading-[40px] text-center">
              {service?.title}
            </h2>
          </div>

          {/* Image grid */}
          <div
            className="image-grid mt-6"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", // Responsive grid with min column size of 150px
              gridGap: "20px",
              justifyContent: "center",
            }}
          >
            {service?.images?.map((image, i) => (
              <div
                key={i}
                className="image-item text-center"
                style={{ maxWidth: "150px", margin: "0 auto" }} // Fix the width of each image item
              >
                <img
                  src={image.src}
                  alt={`service-${i}`}
                  sizes="100px"
                  style={{
                    width: "100px", // Fixed width
                    height: "100px", // Fixed height
                    objectFit: "cover", // Ensure the image maintains aspect ratio and fills the space
                    borderRadius: "8px",
                  }}
                />
                <h5 className="mt-2 font-medium">{image.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  });
};

export default Services;
