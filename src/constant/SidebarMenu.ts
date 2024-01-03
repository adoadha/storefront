import PuzzleIcon from "@/components/icons/PuzzleIcon";
import {
  BanknotesIcon,
  Cog8ToothIcon,
  CubeIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const SidebarMenu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: PuzzleIcon,
    active: "dashboard",
  },
  {
    label: "Product",
    path: "dashboard/product",
    icon: CubeIcon,
    active: "dashboard/product",
    subMenu: [
      {
        label: "Category",
        path: "/product",
        icon: PuzzleIcon,
        active: "product",
      },
      {
        label: "Stock",
        path: "/product",
        icon: PuzzleIcon,
        active: "product",
      },
      {
        label: "Variant",
        path: "/product",
        icon: PuzzleIcon,
        active: "product",
      },
    ],
  },
  {
    label: "Pesanan",
    path: "dashboard/pesanan",
    icon: ShoppingCartIcon,
    active: "pesanan",
    subMenu: [
      {
        label: "Transaksi Harian",
        path: "/dashboard/daily",
        icon: ShoppingCartIcon,
        active: "daily",
      },
      {
        label: "Pesanan Online",
        path: "/dashboard/online",
        icon: ShoppingCartIcon,
        active: "product",
      },
    ],
  },
  {
    label: "Keuangan",
    path: "dashboard/finance",
    icon: BanknotesIcon,
    active: "finance",
    subMenu: [
      {
        label: "Hutang",
        path: "/dashboard/hutang",
        icon: PuzzleIcon,
        active: "product",
      },
    ],
  },
  {
    label: "Pengguna",
    path: "/dashboard/settings",
    icon: UsersIcon,
    active: "dashboard/pengaturan",
  },
  {
    label: "Pengaturan",
    path: "/dashboard/settings",
    icon: Cog8ToothIcon,
    active: "dashboard/pengaturan",
  },
];
