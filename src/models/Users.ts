import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import bcrypt from 'bcryptjs';


@Entity('users')
export default class Users {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  
  @Column()
  password_hash: string;

 password: string;

  @BeforeInsert()
  async hashPass(){
    if (this.password_hash) {
      this.password_hash = await bcrypt.hash(this.password_hash, 8);
    }
  };

  checkPassword(password:string) {
    return bcrypt.compare(password, this.password_hash);
  } 
}