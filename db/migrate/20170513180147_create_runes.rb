class CreateRunes < ActiveRecord::Migration[5.1]
  def change
    create_table :runes do |t|
      t.string :name
      t.json :data

      t.timestamps
    end
  end
end
