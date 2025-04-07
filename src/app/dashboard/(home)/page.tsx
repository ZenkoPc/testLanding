import CreateItemModal from "@/components/dashboard/CreateItemModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { FC } from "react";

interface PageProps {}

interface Item {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

const Page: FC<PageProps> = ({}) => {
  const isAdmin = true;

  const items: Item[] = [
    {
      id: "1",
      name: "Camiseta Negra",
      description: "Una camiseta básica negra, cómoda y elegante.",
      imageUrl:
        "https://st2.depositphotos.com/39040180/43269/i/450/depositphotos_432698912-stock-photo-blank-shirt-color-black-template.jpg",
      price: 19.99,
    },
    {
      id: "2",
      name: "Jeans Azules",
      description: "Pantalones de mezclilla clásicos de corte recto.",
      imageUrl:
        "https://t3.ftcdn.net/jpg/04/83/25/50/360_F_483255019_m1r1ujM8EOkr8PamCHF85tQ0rHG3Fiqz.jpg",
      price: 49.99,
    },
    {
      id: "3",
      name: "Tenis Blancos",
      description: "Zapatos deportivos blancos de alta calidad.",
      imageUrl:
        "https://t4.ftcdn.net/jpg/02/07/04/29/360_F_207042944_wheO6ZShP5o8Nli11LSFWCYGRt2N3mNp.jpg",
      price: 79.99,
    },
    {
      id: "4",
      name: "Gorra Negra",
      description: "Gorra ajustable negra, perfecta para el sol.",
      imageUrl:
        "https://media.istockphoto.com/id/1157599346/photo/black-baseball-cap-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=ltNry5F1DwY8hX6Zk1gCXkwfL4LUuPhfTGGmfwDs5xI=",
      price: 14.99,
    },
  ];

  return (
    <main className="text-white bg-[#050505] w-full min-h-svh flex justify-center">
      <div className="w-full max-w-6xl px-5 md:px-10 flex flex-col gap-6 py-16">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Productos</h1>
          {isAdmin && <CreateItemModal />}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform p-4 flex flex-col"
            >
              {isAdmin && (
                <div className="absolute top-2 right-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="text-white  rounded-full p-1 bg-black border-white/20 border cursor-pointer outline-none">
                        <EllipsisVertical size={20} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#1a1a1a] text-white border-white/20">
                      <DropdownMenuItem className="hover:bg-red-500/20 text-red-400 cursor-pointer">
                        Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}

              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {item.description}
              </p>
              <span className="text-lg font-bold">
                ${item.price.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
