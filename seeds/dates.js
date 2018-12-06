exports.seed = knex =>
  knex('dates').del()
    .then(() =>
      knex('dates').insert([
        {id: 1, user_id: 1},
        {id: 2, user_id: 1},
        {id: 3, user_id: 1},
        {id: 4, user_id: 1},
        {id: 5, user_id: 1},
        {id: 6, user_id: 1},
        {id: 7, user_id: 1}
      ])
    )
