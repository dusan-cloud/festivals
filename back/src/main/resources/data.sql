INSERT INTO korisnik (id, e_mail, korisnicko_ime, lozinka, ime, prezime, uloga)
              VALUES (1,'miroslav@maildrop.cc','miroslav','$2y$12$NH2KM2BJaBl.ik90Z1YqAOjoPgSd0ns/bF.7WedMxZ54OhWQNNnh6','Miroslav','Simic','ADMIN');
INSERT INTO korisnik (id, e_mail, korisnicko_ime, lozinka, ime, prezime, uloga)
              VALUES (2,'tamara@maildrop.cc','tamara','$2y$12$DRhCpltZygkA7EZ2WeWIbewWBjLE0KYiUO.tHDUaJNMpsHxXEw9Ky','Tamara','Milosavljevic','KORISNIK');
INSERT INTO korisnik (id, e_mail, korisnicko_ime, lozinka, ime, prezime, uloga)
              VALUES (3,'petar@maildrop.cc','petar','$2y$12$i6/mU4w0HhG8RQRXHjNCa.tG2OwGSVXb0GYUnf8MZUdeadE4voHbC','Petar','Jovic','KORISNIK');

              
INSERT INTO mesto(id, grad, drzava) VALUES(1, 'Novi sad', 'SRB');
INSERT INTO mesto(id, grad, drzava) VALUES(2, 'Budimpesta', 'HUN');
INSERT INTO mesto(id, grad, drzava) VALUES(3, 'Beograd', 'SRB');
INSERT INTO mesto(id, grad, drzava) VALUES(4, 'Zagreb', 'CRO');

INSERT INTO festival(id, naziv, datum_pocetka, datum_zavrsetka, cena_karte, broj_dostupnih_karata, mesto_id) VALUES(1, 'Tamburica fest', '2021-08-12', '2021-08-15', 1200, 30, 4);
INSERT INTO festival(id, naziv, datum_pocetka, datum_zavrsetka, cena_karte, broj_dostupnih_karata, mesto_id) VALUES(2, 'EXIT', '2021-07-15', '2021-07-20', 12000, 200, 1);
INSERT INTO festival(id, naziv, datum_pocetka, datum_zavrsetka, cena_karte, broj_dostupnih_karata, mesto_id) VALUES(3, 'Sidget', '2021-08-18', '2021-08-22', 7000, 15, 2);
INSERT INTO festival(id, naziv, datum_pocetka, datum_zavrsetka, cena_karte, broj_dostupnih_karata, mesto_id) VALUES(4, 'Beer fest', '2021-09-28', '2021-10-02', 7000, 150, 3);
INSERT INTO festival(id, naziv, datum_pocetka, datum_zavrsetka, cena_karte, broj_dostupnih_karata, mesto_id) VALUES(5, 'Love fest', '2021-09-22', '2021-10-27', 500, 200, 3);
INSERT INTO festival(id, naziv, datum_pocetka, datum_zavrsetka, cena_karte, broj_dostupnih_karata, mesto_id) VALUES(6, 'Ok Fest', '2021-11-28', '2021-12-02', 1000, 54, 1);