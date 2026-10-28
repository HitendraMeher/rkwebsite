import heroWorkstation from './images/hero_designer_workstation_1792460984030.jpg';
import autocadPlan from './images/autocad_drafting_plan_1792441376546.jpg';
import cadCivilLayout from './images/cad_civil_layout_1793039919865.jpg';
import cadCeilingElectrical from './images/cad_ceiling_electrical_1793039934288.jpg';
import heroLivingRoom from './images/hero_interior_render_1792441376270.jpg';
import bedroomInterior from './images/bedroom_interior_render_1792441376675.jpg';
import kitchenRender from './images/vray_kitchen_render_1792441376376.jpg';
import diningChandelierRender from './images/dining_chandelier_render_1793077896182.jpg';
import studentPriya from './images/student_priya_1792912398389.jpg';
import studentPooja from './images/student_pooja_1792912399534.jpg';
import studentRohan from './images/student_rohan_1792912402180.jpg';
import studentNeha from './images/student_neha_1792912400197.jpg';

export const IMAGES = {
  workstation: heroWorkstation || '/images/workstation.jpg',
  autocad: autocadPlan || '/images/autocad.jpg',
  cadCivil: cadCivilLayout || autocadPlan,
  cadCeiling: cadCeilingElectrical || autocadPlan,
  livingRoom: heroLivingRoom || '/images/living_room.jpg',
  bedroom: bedroomInterior || '/images/bedroom.jpg',
  kitchen: kitchenRender || '/images/kitchen.jpg',
  dining: diningChandelierRender || '/images/dining.jpg',
  banner: '/images/institute_banner.jpg',
  students: {
    priya: studentPriya || '/images/student_priya.jpg',
    pooja: studentPooja || '/images/student_pooja.jpg',
    rohan: studentRohan || '/images/student_rohan.jpg',
    neha: studentNeha || '/images/student_neha.jpg',
    niddhi: '/assets/aistudio/image_9117ba86.png',
    shreyas: '/assets/aistudio/image_f6269640.png',
  }
};
