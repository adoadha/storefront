import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HutangPage = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-4 mt-3">
        <Card>
          <div className="flex-col px-5 py-2">
            <h1 className="text-[14px] text-gravel ">Total Hutang </h1>
            <div className="flex items-baseline">
              <h1 className="text-[35px] font-semibold text-gravel">1000</h1>
              {/* <UpStatisticsIcon className="w-3 h-3 ml-2" /> */}
              <span className="text-sm text-[#5A9B1A]">20%</span>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex-col px-5 py-2">
            <h1 className="text-[14px] text-gravel ">Pemasukan Hari Ini</h1>
            <div className="flex items-baseline">
              <h1 className="text-[35px] font-semibold text-gravel">1000</h1>
              {/* <UpStatisticsIcon className="w-3 h-3 ml-2" /> */}
              <span className="text-sm text-[#5A9B1A]">20%</span>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex-col px-5 py-2">
            <h1 className="text-[14px] text-gravel ">Pengeluaran Hari ini </h1>
            <div className="flex items-baseline">
              <h1 className="text-[35px] font-semibold text-gravel">1000</h1>
              <span className="text-sm text-[#5A9B1A]">20%</span>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex-col px-5 py-2">
            <h1 className="text-[14px] text-gravel ">
              Penjualan PPOB Hari Ini{" "}
            </h1>
            <div className="flex items-baseline">
              <h1 className="text-[35px] font-semibold text-gravel">1000</h1>
              {/* <UpStatisticsIcon className="w-3 h-3 ml-2" /> */}
              <span className="text-sm text-[#5A9B1A]">20%</span>
            </div>
          </div>
        </Card>
      </div>
      <Card className="my-3">
        <div className="px-5 py-2">
          <CardTitle>Aktivitas Harian</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </div>
        <Separator orientation="horizontal" />
        <div className="mx-5 my-5">
          <Tabs defaultValue="account" className="w-full bg-blue-500">
            <TabsList className="uppercase">
              <TabsTrigger value="hutang">Hutang</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="hutang">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  );
};

export default HutangPage;
