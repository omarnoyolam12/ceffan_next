import Image from "next/image";
import Link from "next/link";
import { BarraLateral } from "../blog";     
import sass from "../../../styles/sass/entradaBlog/Grid.module.scss";
import imagen1 from "../../../../public/img/curso4.jpg";

const Grid = () => {
    return (
        <main className={`contenedor ${sass.layout}`}>
            <div className={sass.texto}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis id earum accusantium architecto expedita quisquam, explicabo ab hic dicta eum error minus debitis, voluptates magnam. Rerum, excepturi unde quo doloribus perspiciatis dolores! Sed deserunt veritatis doloribus! Aliquid officia et, ad inventore laboriosam asperiores magnam error natus voluptates deleniti rerum doloremque numquam ea esse veritatis repellendus tempore harum vero?
                </p>

                <figure className={sass.imagen}>
                    <Image
                        src={imagen1}
                        fill
                        alt="Imagen Blog"
                    />
                </figure>

                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque asperiores iure cupiditate? Doloremque enim veritatis quod facilis quam eius, temporibus ipsum blanditiis officia, ipsa facere rem harum quisquam error dolorum qui cupiditate obcaecati dolorem! Molestias neque ullam ab esse odio! Expedita alias, temporibus repellat consequatur tempora iure! Earum ratione modi rerum ipsum magni, a minus quos nihil debitis, nostrum, quod assumenda! Fugit, est eveniet nemo corporis voluptates nobis explicabo nulla eligendi reprehenderit, voluptatibus blanditiis magnam facere dicta aliquid architecto commodi illum vel soluta enim repellat distinctio nesciunt. Commodi aut repudiandae voluptate, in vel sapiente fugiat ad iste eaque molestias. Culpa a illum repellendus possimus ut iste consequuntur officia repellat quis aliquam cumque maxime laborum fuga nesciunt modi corporis praesentium, nulla eius, placeat, magnam rerum alias! Ratione obcaecati magni similique. Corporis ex dignissimos eius, reprehenderit possimus nostrum voluptatem impedit minima assumenda similique rem officia suscipit quaerat ipsam voluptatum, quasi autem ipsum provident fugiat at praesentium! Cumque molestias blanditiis laboriosam sunt qui! Tempore ipsam labore odit sed dignissimos expedita, ipsum recusandae quia numquam perferendis aut debitis minima sint deserunt, alias modi inventore libero. Earum rem modi assumenda molestiae dolor itaque iure mollitia. Distinctio, fugiat ut temporibus consectetur sequi quae rem omnis esse, vitae modi numquam voluptas amet eveniet tempore quisquam? Iste officia natus explicabo cupiditate molestiae aliquid laboriosam quod corrupti nihil perferendis excepturi, recusandae ratione? Labore earum consectetur veniam error, in quisquam esse cumque! Corrupti quasi nulla maxime impedit, odit tenetur quisquam consequatur ipsa quidem nemo illum accusantium ipsum reiciendis cupiditate?
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quam saepe culpa atque dolore facere minus laudantium, eaque nesciunt. Laudantium neque, optio hic corrupti saepe unde iure quibusdam magni dolore tenetur ratione numquam est aliquid beatae autem ea at debitis. Dolores aspernatur vel, nisi accusantium minus voluptatum sapiente harum. In autem eligendi vel praesentium. Maiores, temporibus. Veritatis molestias id incidunt voluptatem? Perferendis voluptates quibusdam, corporis repellat aut excepturi tempore officiis alias eveniet adipisci ab impedit sit, consequatur saepe omnis, tempora animi nam. Itaque consectetur exercitationem sit. Blanditiis voluptates temporibus at, amet ipsum commodi excepturi consequatur. Sed voluptas omnis recusandae officia repellendus ipsum libero esse suscipit eligendi voluptates molestiae nobis voluptatum illo optio explicabo sequi veritatis tenetur tempore amet maxime, voluptate cumque at. Magnam et dignissimos alias? Repudiandae, quod vitae expedita beatae sint alias earum vero sequi. Dolores mollitia ipsa accusamus sapiente, totam dolore praesentium laboriosam veritatis dicta laudantium numquam qui earum eius maiores quae eos enim. Earum molestiae accusamus minus quibusdam non eaque. Mollitia sapiente sint et odio quo nobis esse magnam, quas similique neque! Fugiat nam debitis a quis veniam rem unde aut error expedita esse velit quidem obcaecati, similique magni eius animi asperiores earum, quaerat voluptates magnam dolore!
                </p>

                
                <div className={sass.redes}>
                    <p>Compartir:</p>
                    <Link href={'/'}>
                        <i className='bx bxl-facebook'></i>
                    </Link>
                    <Link href={'/'}>
                        <i className='bx bxl-instagram-alt' ></i>
                    </Link>
                    <Link href={'/'}>
                        <i className='bx bxl-linkedin' ></i>
                    </Link>
                </div>
            </div>

            <aside className={sass.acerca}>
                <BarraLateral/>
            </aside>
        </main>
    )
}

export default Grid