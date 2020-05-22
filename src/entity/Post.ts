import {
    Column,
    CreateDateColumn,
    Entity, Index, JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne, OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Category} from "./Category";
import {User} from "./User";
import {Image} from "./Image";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    references:string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    // Full cascades on categories.
    @ManyToMany(type => Category, {
        cascade: true
    })
    @JoinTable()
    categories: Category[];


    @ManyToOne(type => User, user => user.posts)
    user: User;

    @OneToMany(type => Image, image => image.post, {
        cascade: true
    })
    @JoinColumn()
    images: Image[];


}
