const movies = {
oppenheimer:{title:"Oppenheimer",desc:"Criador da bomba atômica.",image:"banners/oppenheimerb.png",mobileImage:"banners/oppenheimerm.png",trailer:"bK6ldnjE3Y0"},
batman:{title:"The Batman",desc:"Investigação em Gotham.",image:"banners/batmanb.png",mobileImage:"banners/the_batmanm.png",trailer:"mqqft2x_Aa4"},
stranger:{title:"Stranger Things",desc:"Mundo invertido.",image:"banners/stranger_thingsb.png",mobileImage:"banners/stranger_thingsm.png",trailer:"Wb3kaP580kA"},
arcane:{title:"Arcane",desc:"Irmãs em conflito.",image:"banners/arcaneb.png",mobileImage:"banners/arcanem.png",trailer:"Ft_QrPGXWqc"},
onepiece:{title:"One Piece",desc:"Piratas em busca do tesouro.",image:"banners/one_pieceb.png",mobileImage:"banners/one_piecem.png",trailer:"KLtSxOirH4g"},
fallout:{title:"Fallout",desc:"Pós-apocalipse.",image:"banners/falloutb.png",mobileImage:"banners/falloutm.png",trailer:"2QGZ_56-8Eg&t=17s"},
succession:{title:"Succession",desc:"Disputa de poder.",image:"banners/successionb.png",mobileImage:"banners/successionm.png",trailer:"t3D3ewle7XY"},
bear:{title:"The Bear",desc:"Chef salva restaurante.",image:"banners/the_bearb.png",mobileImage:"banners/the_bearm.png",trailer:"SLPvNhZ8SFQ"},
boys:{title:"The Boys",desc:"Heróis corruptos.",image:"banners/the_boysb.png",mobileImage:"banners/the_boysm.png",trailer:"PXXPpFCxnkQ"},
lastofus:{title:"The Last of Us",desc:"Sobrevivência.",image:"banners/the_last_of_usb.png",mobileImage:"banners/the_last_of_usm.png",trailer:"0vB2lHQim3Q"},
lotus:{title:"The White Lotus",desc:"Drama em resort.",image:"banners/the_white_lotusb.png",mobileImage:"banners/the_white_lotusm.png",trailer:"XwQRkOK5KC4"},
peaky:{title:"Peaky Blinders",desc:"Gangue poderosa.",image:"banners/peaky_blindersb.png",mobileImage:"banners/peaky_blindersm.png",trailer:"P_-r11fcDTc"},
morning:{title:"The Morning Show",desc:"TV drama.",image:"banners/the_morningb.png",mobileImage:"banners/the_morningm.png",trailer:"Klq88ERaGuM"},
blackmirror:{title:"Black Mirror",desc:"Tecnologia sombria.",image:"banners/black_mirrorb.png",mobileImage:"banners/black_mirrorm.png",trailer:"W210J2A49TA"},
avatar:{title:"Avatar",desc:"Pandora.",image:"banners/avatarb.png",mobileImage:"banners/avatarm.png",trailer:"yXPWsdT43YE"},
belica:{title:"Belica",desc:"Guerra.",image:"banners/belicab.png",mobileImage:"banners/belicam.png",trailer:"mBenb7O8Hnc"},
crime101:{title:"Crime 101",desc:"Investigação.",image:"banners/crime_101b.png",mobileImage:"banners/crime_101m.png",trailer:"f5y-cziwmMw"},
deadpool:{title:"Deadpool",desc:"Anti-herói.",image:"banners/deadpoolb.png",mobileImage:"banners/deadpoolm.png",trailer:"dEbe0rS4Z2A"},
hailmary:{title:"Hail Mary",desc:"Missão espacial.",image:"banners/hail_maryb.png",mobileImage:"banners/hail_marym.png",trailer:"m08TxIsFTRI"},
ironlug:{title:"Iron Lug",desc:"Herói.",image:"banners/iron_lungb.png",mobileImage:"banners/iron_lungm.png",trailer:"MM_jLdng4Eo"},
predator:{title:"Predator",desc:"Criatura.",image:"banners/predatorb.png",mobileImage:"banners/predatorm.png",trailer:"43R9l7EkJwE"},
revenge:{title:"Revenge",desc:"Vingança.",image:"banners/revengeb.png",mobileImage:"banners/revengem.png",trailer:"NHk7scrb_9I"},
shelter:{title:"Shelter",desc:"Mistério.",image:"banners/shelterb.png",mobileImage:"banners/shelterm.png",trailer:"PPMawzJxKF4"},
socorro:{title:"Socorro",desc:"Terror.",image:"banners/socorrob.png",mobileImage:"banners/socorrom.png",trailer:"JjoKfyy2tI0"},
zootopia:{title:"Zootopia 2",desc:"Aventura.",image:"banners/zootopia_2b.png",mobileImage:"banners/zootopia_2m.png",trailer:"sEgPQ7HKoBA"}
};

const id=localStorage.getItem("movie");
const movie=movies[id];

if(movie){
document.getElementById("title").textContent=movie.title;
document.getElementById("desc").textContent=movie.desc;

const isMobile = window.matchMedia("(max-width: 768px)").matches;

const imageToUse = (isMobile && movie.mobileImage)
  ? movie.mobileImage
  : movie.image;

console.log("Imagem usada:", imageToUse);

document.getElementById("banner").style.background =
`url(${imageToUse}) center/cover no-repeat`;
}
const iframe = document.getElementById("trailer");

if(movie.trailer){
  iframe.src = `https://www.youtube.com/embed/${movie.trailer}?autoplay=1&mute=1&controls=0&loop=1&playlist=${movie.trailer}&vq=hd1080`;

  setTimeout(() => {
    iframe.classList.add("active");
  }, 1000);
  window.onload = () => {
  document.body.classList.add("loaded");
};
}
