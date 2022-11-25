/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('userTable').del();
  await knex('userTable').insert([
    { userName: "今井博之", pass:"0000", "0":true, "1":true, "2":true, "3":true, "4":true, "5":true, "6":true, "7":true, "8":true, ohtani:false, starbucks:false},
    { userName: "江尻健志", pass:"0000", "0":true, "1":true, "2":true, "3":true, "4":true, "5":true, "6":true, "7":true, "8":true, ohtani:false, starbucks:false},
    { userName: "間悠介", pass:"0000", "0":true, "1":false, "2":true, "3":false, "4":true, "5":false, "6":true, "7":false, "8":false, ohtani:false, starbucks:false},
    { userName: "赤石和佳", pass:"0000", "0":false, "1":true, "2":false, "3":false, "4":false, "5":false, "6":false, "7":true, "8":false, ohtani:false, starbucks:false},
    { userName: "浅井順二", pass:"0000", "0":false, "1":false, "2":true, "3":false, "4":false, "5":false, "6":true, "7":false, "8":false, ohtani:false, starbucks:false},
    { userName: "浅野雅夫", pass:"0000", "0":false, "1":false, "2":false, "3":false, "4":false, "5":true, "6":false, "7":true, "8":false, ohtani:false, starbucks:false},
    { userName: "岩永明大", pass:"0000", "0":true, "1":false, "2":false, "3":false, "4":false, "5":false, "6":false, "7":false, "8":true, ohtani:false, starbucks:false},
    { userName: "川口鈴音", pass:"0000", "0":false, "1":true, "2":false, "3":true, "4":false, "5":false, "6":false, "7":false, "8":false, ohtani:true, starbucks:false},
    { userName: "葛山由羽", pass:"0000", "0":false, "1":false, "2":false, "3":false, "4":false, "5":false, "6":true, "7":false, "8":false, ohtani:false, starbucks:false},
    { userName: "小池良樹", pass:"0000", "0":false, "1":false, "2":false, "3":false, "4":false, "5":true, "6":false, "7":true, "8":false, ohtani:false, starbucks:false},
    { userName: "樋口和宏", pass:"0000", "0":false, "1":false, "2":true, "3":false, "4":true, "5":false, "6":false, "7":false, "8":false, ohtani:false, starbucks:false},
    { userName: "平岡琢也", pass:"0000", "0":false, "1":true, "2":false, "3":true, "4":false, "5":true, "6":false, "7":false, "8":false, ohtani:false, starbucks:false},
    { userName: "築山博介", pass:"0000", "0":false, "1":false, "2":true, "3":false, "4":false, "5":false, "6":true, "7":false, "8":true, ohtani:false, starbucks:false},
    { userName: "増田翠", pass:"0000", "0":false, "1":false, "2":false, "3":false, "4":false, "5":true, "6":false, "7":false, "8":false, ohtani:false, starbucks:false},
    { userName: "菅波敦", pass:"0000", "0":false, "1":false, "2":false, "3":false, "4":true, "5":false, "6":false, "7":false, "8":false, ohtani:false, starbucks:false},
    { userName: "三浦悠暉", pass:"0000", "0":false, "1":true, "2":false, "3":true, "4":false, "5":true, "6":false, "7":false, "8":false, ohtani:false, starbucks:false},
    { userName: "寺坂美信", pass:"0000", "0":false, "1":false, "2":true, "3":false, "4":false, "5":false, "6":false, "7":false, "8":true, ohtani:false, starbucks:false},
    { userName: "田原寛太", pass:"0000", "0":false, "1":false, "2":false, "3":false, "4":false, "5":true, "6":false, "7":false, "8":false, ohtani:false, starbucks:false},
    { userName: "Eriko", pass:"0000", "0":true, "1":true, "2":true, "3":true, "4":true, "5":true, "6":true, "7":true, "8":true, ohtani:false, starbucks:true},
    { userName: "バラえもん", pass:"0000", "0":false, "1":true, "2":false, "3":true, "4":false, "5":true, "6":false, "7":true, "8":false, ohtani:false, starbucks:false},
  ]);
};
