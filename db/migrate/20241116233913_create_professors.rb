class CreateProfessors < ActiveRecord::Migration[8.0]
  def change
    create_table :professors, id: :uuid do |t|
      t.belongs_to :user, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
