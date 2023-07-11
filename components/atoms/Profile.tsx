import Image from "next/image";
const Profile = () => {
  return (
    <Image
      src="assets/akpu-face.svg"
      alt="image"
      fill
      style={{ objectFit: "cover" }}
    />
  );
};

export default Profile;
