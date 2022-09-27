import {Column,Entity,PrimaryGeneratedColumn} from 'typeorm';

@Entity('umuser')
export class User {
    @PrimaryGeneratedColumn({name: 'umuserid'})
    umuserid: number;

    @Column({nullable: false, name: 'username'})
    username: string;

    @Column({nullable: true, name: 'name'})
    name: string;

    @Column({nullable: false, name: 'firstname'})
    firstname: string;

    @Column({nullable: false, name: 'lastname'})
    lastname: string;

    @Column({nullable: false, name: 'email'})
    email: string;

    @Column({name: 'createdate'})
    createdate: Date;

    @Column({name: 'createdate'})
    updatedate: Date;
}
