function drawLigaments(svg, view) {
  if (view !== 'anterior') return;

  // Genunchi
  E(svg, 105, 522, 14, 10, 'ligament', 'Ligamente genunchi stg (LCA, LCP)', 'Ligamente genunchi – LCA, LCP, LCM, LCL');
  E(svg, 155, 522, 14, 10, 'ligament', 'Ligamente genunchi dr', 'Ligamente genunchi – LCA, LCP, LCM, LCL');
  // Glezne
  E(svg, 99, 646, 12, 8, 'ligament', 'Ligamente gleznă stg (deltoid, ATFL)', 'Ligamente gleznă – deltoid și lateral');
  E(svg, 161, 646, 12, 8, 'ligament', 'Ligamente gleznă dr', 'Ligamente gleznă – deltoid și lateral');
  // Șold
  E(svg, 105, 400, 14, 10, 'ligament', 'Ligamente șold stg (Bigelow)', 'Articulația șoldului – ligamente capsulare');
  E(svg, 155, 400, 14, 10, 'ligament', 'Ligamente șold dr', 'Articulația șoldului – ligamente capsulare');
  // Umăr
  E(svg, 54, 106, 12, 9, 'ligament', 'Ligamente umăr stg', 'Articulația umărului – ligamente');
  E(svg, 206, 106, 12, 9, 'ligament', 'Ligamente umăr dr', 'Articulația umărului – ligamente');
  // ATM
  E(svg, 130, 75, 18, 10, 'ligament', 'ATM – articulație temporo-mandibulară', 'Articulația temporo-mandibulară (ATM)');
}