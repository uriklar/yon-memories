class CreateMemories < ActiveRecord::Migration
  def change
    create_table :memories do |t|
      t.string :name
      t.text :story

      t.timestamps null: false
    end
  end
end
