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
        path: "dashboard/product/category",
        icon: PuzzleIcon,
        active: "product",
      },
      {
        label: "Stock",
        path: "dashboard/product/stock",
        icon: PuzzleIcon,
        active: "product",
      },
    ],
  },
  {
    label: "Pesanan",
    path: "dashboard/pesanan",
    icon: ShoppingCartIcon,
    active: "dashboard/pesanan",
  },
  {
    label: "Keuangan",
    path: "dashboard/finance",
    icon: BanknotesIcon,
    active: "dashboard/finance",
    subMenu: [
      {
        label: "Aktivitas Harian",
        path: "dashboard/finance/hutang",
        icon: PuzzleIcon,
        active: "product",
      },
    ],
  },
  {
    label: "Laporan",
    path: "dashboard/report",
    icon: UsersIcon,
    active: "dashboard/report",
  },
  {
    label: "Pengaturan",
    path: "/dashboard/settings",
    icon: Cog8ToothIcon,
    active: "dashboard/pengaturan",
  },
];
