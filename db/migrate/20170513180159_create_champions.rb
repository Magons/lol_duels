class CreateChampions < ActiveRecord::Migration[5.1]
  def change
    create_table :champions do |t|
      t.string :name
      t.json :data

      t.timestamps
    end
  end
end
