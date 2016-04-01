class Customer < ActiveRecord::Base
  has_many :customers_shipping_addresses

  def primary_shipping_address
    self.customers_shpping_addresses.find_by(primary: true).address
  end

  has_one :customers_billing_address
  has_one :billing_address, through: :customers_billing_address, source: :address
end
