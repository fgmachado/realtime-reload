package io.fgmachado.pocreactive.repository;

import io.fgmachado.pocreactive.entity.Customer;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.mongodb.repository.Tailable;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface CustomerRepository extends ReactiveMongoRepository<Customer, String> {

    @Tailable
    Flux<Customer> findAllByTenant(String tenant);

}
