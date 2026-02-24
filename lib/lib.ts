export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Helper function to format date for display
export const formatDateForDisplay = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const avatarPlaceholderUrl = `https://api.dicebear.com/7.x/avataaars/png?seed=46`;

export const GOOGLE_CONFIG = {
  webClientId:
    "33348702787-hb3kj6qdnk0gimadg1du0nkl9pdehgjl.apps.googleusercontent.com",
  iosClientId:
    "33348702787-hrtr3jt9icq53sl4r3e9kohjle9nu154.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  profileImageSize: 120,
};
