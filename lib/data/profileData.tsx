import { MaterialIcons, Octicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const profileBusinessData = [
  {
    id: "edit_profile_1",
    name: "Edit Profile",
    description: "About you, certifications, experience, location",
    bg: "#F3B3C31A",
    borderColor: "#FFFFFF",
    icon: <AntDesign name="security-scan" size={20} color="#E8A0BF" />,
  },
  {
    id: "portfolio_2",
    name: "Portfolio",
    description: "Upload and manage your work",
    bg: "#F3B3C31A",
    borderColor: "#FFFFFF",
    icon: (
      <MaterialCommunityIcons
        name="bell-badge-outline"
        size={20}
        color="#E8A0BF"
      />
    ),
  },
];

export const servicesData = [
  {
    id: "my_services_1",
    name: "My Services",
    description: "Pricing, duration & cancellation policy",
    bg: "#F3B3C31A",
    borderColor: "#FFFFFF",
    icon: <AntDesign name="security-scan" size={20} color="#E8A0BF" />,
  },
  {
    id: "availability_2",
    name: "Availability",
    description: "Working days, hours & holidays",
    bg: "#F3B3C31A",
    borderColor: "#FFFFFF",
    icon: (
      <MaterialCommunityIcons
        name="bell-badge-outline"
        size={20}
        color="#E8A0BF"
      />
    ),
  },
  {
    id: "calender_3",
    name: "Calender",
    description: "View and manage bookings",
    bg: "#F3B3C31A",
    borderColor: "#FFFFFF",
    icon: (
      <MaterialCommunityIcons
        name="bell-badge-outline"
        size={20}
        color="#E8A0BF"
      />
    ),
  },
];

export const paymentsData = [
  {
    id: "payments_earning_1",
    name: "Payments & Earning",
    description: "View balance, payouts & withdrawals",
    bg: "#F3B3C31A",
    borderColor: "#FFFFFF",
    icon: <AntDesign name="security-scan" size={20} color="#E8A0BF" />,
  },
];

export const reputationData = [
  {
    id: "reviews_1",
    name: "Reviews",
    description: "See client feedback & ratings",
    bg: "#F3B3C31A",
    borderColor: "#FFFFFF",
    icon: <AntDesign name="security-scan" size={20} color="#E8A0BF" />,
  },
  {
    id: "performace_insight_1",
    name: "Performance Insights",
    description: "Booking trends & profile views",
    bg: "#F3B3C31A",
    borderColor: "#FFFFFF",
    icon: <AntDesign name="security-scan" size={20} color="#E8A0BF" />,
  },
];

export const settingsData = [
  {
    id: "account_settings_1",
    name: "Account Settings",
    description: "Email, phone, password",
    bg: "#F3B3C31A",
    borderColor: "#FFFFFF",
    icon: <AntDesign name="security-scan" size={20} color="#E8A0BF" />,
  },
  {
    id: "notification_2",
    name: "Notification",
    description: "Booking & message alerts",
    bg: "#F3B3C31A",
    borderColor: "#FFFFFF",
    icon: (
      <MaterialCommunityIcons
        name="bell-badge-outline"
        size={20}
        color="#E8A0BF"
      />
    ),
  },
  {
    id: "terms_condition_3",
    name: "Terms & Condition",
    description: "",
    bg: "#F3B3C31A",
    borderColor: "#FFFFFF",
    icon: (
      <MaterialCommunityIcons
        name="bell-badge-outline"
        size={20}
        color="#E8A0BF"
      />
    ),
  },
];

export const profileData = [
  {
    section: "Profile & Business",
    items: [...profileBusinessData],
  },
  {
    section: "Services",
    items: [...servicesData],
  },
  {
    section: "Payments",
    items: [...paymentsData],
  },
  {
    section: "Reputation",
    items: [...reputationData],
  },
  {
    section: "Settings",
    items: [...settingsData],
  },
];

// Overview tab data

export const overviewData = [
  {
    id: "payout_settings_1",
    name: "Payout Settings",
    description: "Manage your bank account",
    bg: "#F3B3C31A",
    borderColor: "#FFFFFF",
    icon: <MaterialIcons name="payment" size={20} color="#E8A0BF" />,
  },
  {
    id: "download_2",
    name: "Download Statement",
    description: "Export earnings report",
    bg: "#F3B3C31A",
    borderColor: "#FFFFFF",
    icon: <Octicons name="download" size={20} color="#E8A0BF" />,
  },
];
